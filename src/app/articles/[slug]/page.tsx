export default async function ArticlePage(
  props: PageProps<"/articles/[slug]">,
) {
  const posts = [
    { id: "1", title: "beb" },
    { id: "2", title: " bob" },
  ];
  const { slug } = await props.params;

  return (
    <>
      <p>{slug}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
