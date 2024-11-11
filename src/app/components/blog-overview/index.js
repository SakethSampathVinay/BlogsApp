"use client"

import { Button } from "@/components/ui/button";


function BlogOverview() {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
                <div>
                    <Button>Add New Blog Section 
                        
                    </Button>
                </div>
                <div>
                    Blog List Section 
                </div>
            </div>
        </div>
    )
}

export default BlogOverview;