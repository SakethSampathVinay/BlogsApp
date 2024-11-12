"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
        <Button onClick={() => setOpenBlogDialog(true)}>
          Add New Blog Section
        </Button>
      </div>
      <div>
        <Dialog open={openBlogDialog} openBlogDialog = {() => {
          setOpenBlogDialog(false),
          setBlogFormData({
            title: "",
            description: "",
          });
        }}>
          <Button variant="outline">Edit Profile</Button>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Blog</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter blog title"
                  value={blogFormData.title}
                  name="title"
                  className="col-span-3"
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      title: event.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter blog description"
                  value={blogFormData.description}
                  className="col-span-3"
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      description: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSaveBlogData} type="button">
                {loading ? "Saving Changes" : "Save Changes"}
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
