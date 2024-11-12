"use client";

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

const initialBlogFormData = {
  title: "",
  description: "",
};

function BlogOverview({ blogList }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  async function handleSaveBlogData() {
    try {
      const apiResponse = currentEditedBlogId != null ? await fetch(`/api/update-blog?id=${currentEditedBlogId}`, {
        method: "PUT",
        body: JSON.stringify(blogFormData),

      }) : await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });
      const result = await apiResponse.json();
      if (result?.success) {
        setBlogFormData(blogFormData);
        setOpenBlogDialog(false);
        setLoading(false);
        setCurrentEditedBlogId(null);
        router.refresh();
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  async function handleDeleteBlogByID(getCurrentID) {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentID}`, {
        method: "DELETE",
      });
      const result = await apiResponse.json();

      if (result?.success) router.refresh();
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEdit(getCurrentBlogID) {
    setCurrentEditedBlogId(getCurrentBlogID?._id);
    setBlogFormData({
      title: getCurrentBlogID?.title,
      description: getCurrentBlogID?.description,
    });
    setOpenBlogDialog(true);
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
        currentEditedBlogID={currentEditedBlogId}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItems) => (
            <Card className="p-5">
              <CardContent>
                <CardTitle className="mb-5 ">{blogItems?.title}</CardTitle>
                <CardDescription>{blogItems?.description}</CardDescription>
                <div className="mt-5 flex gap-5 items-center">
                  <Button onClick={() => handleEdit(blogItems)}>Edit</Button>
                  <Button onClick={() => handleDeleteBlogByID(blogItems._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="text-3xl font-extrabold">
            No Blog found! Please add one
          </Label>
        )}
      </div>
    </div>
  );
}

export default BlogOverview;
