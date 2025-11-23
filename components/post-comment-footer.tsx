import { Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function PostCommentFooter() {
    return (
        <div className="p-4 flex flex-row justify-between items-start gap-4">
            <Button variant="ghost" className="cursor-pointer" size="icon">
                <Smile />
            </Button>
            <Textarea className="min-h-10"  placeholder="Say something"/>
            <Button variant="link" size="icon" className="cursor-pointer text-blue-500">
                <p>发布</p>
            </Button>
        </div>
    )
}
