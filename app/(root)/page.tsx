import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       _id: 1,
  //       name: "John Doe",
  //     },
  //     _id: 1,
  //     title: "Startup 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     image:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvariety.com%2F2022%2Fdigital%2Fnews%2Fwall-e-criterion-4k-blu-ray-release-1235364680%2F&psig=AOvVaw1V1Put3FeOFZ8FRilx2gpP&ust=1731934538694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPD7g4q144kDFQAAAAAdAAAAABAE",
  //     category: "Robots",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Share Your Ideas, <br />
          Connect With People
        </h1>

        <p className="sub-heading !max-w-3xl">
          Bring Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
