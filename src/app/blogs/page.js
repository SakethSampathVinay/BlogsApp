import BlogOverview from "../components/blog-overview";

async function fetchListOfBlogs() {
  try {
    const apiResponse = await fetch("http://localhost:3000/api/get-blogs", {
      method: 'GET',
      cache: "no-store",
    });

    // Attempt to parse the response as JSON
    const result = await apiResponse.json();
    return result?.data;

  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

async function Blogs() {
  const blogList = await fetchListOfBlogs();
  // console.log(blogList); // To see if data is fetched correctly
  return <BlogOverview blogList={blogList} />;
}

export default Blogs;

