"use client";

import { useState } from "react";
import AddNewBlog from "../add-new-blog";

function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  return (
    <div>
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
      />
    </div>
  );
}

export default BlogOverview;
