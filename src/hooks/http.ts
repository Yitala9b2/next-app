//import { draftMode, cookies } from "next/headers";
import type { NextApiRequest, NextApiResponse } from 'next'
export async function fetchGraphQL<T = any, U = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
  method? : string,
  body?: BodyInit | null | undefined,
): Promise<T> {
//  const { isEnabled: preview } = draftMode();

  try {
    //let authHeader = "";
    //if (preview) {
    //  const auth = cookies().get("wp_jwt")?.value;
    //  if (auth) {
    //    authHeader = `Bearer ${auth}`;
    //  }
    //}

    //const body = JSON.stringify({
    //  query,
    //  variables: {
    //    //preview,
    //    ...variables,
    //  },
    //});

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
      {
        method: method || 'GET',
        headers: {
          "Content-Type": "application/json",
        //  ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body,
        //variables: {variables},
        //cache: preview ? "no-cache" : "default",
        next: {
          tags: ["wordpress"],
        },
      },
    );

    if (!response.ok) {
      console.error("Response Status:", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error("Error executing GraphQL query");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}