import prisma from "@/lib/prisma";
import { Post, User } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface HomeProps {
  usersWithPosts: (User & {
    posts: Post[];
  })[];
}

export default function Home({ usersWithPosts }: HomeProps) {
  const a = 10;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Users With Posts</h1>

        {usersWithPosts.map((u) => (
          <div key={u.id}>
            <h2>
              {u.id}: {u.name}
            </h2>
            <h3>{u.email}</h3>

            {u.posts
              .filter((p) => p.published)
              .map((p) => (
                <div key={p.id}>
                  <h3>Posts:</h3>
                  <h4>
                    {p.id} - {p.title}
                  </h4>
                  <span>{p.content}</span>
                </div>
              ))}
          </div>
        ))}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return {
    props: {
      usersWithPosts,
    },
  };
};
