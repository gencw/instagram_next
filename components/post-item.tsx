import PostItemComment from "./post-item-comment";
import PostItemContainer from "./post-item-container";
import PostItemHeader from "./post-item-header";
import PostItemInteractions from "./post-item-interactions";

export default function PostItem() {
  return (
    <div className="w-full sm:w-[96%] md:w-[585px] flex flex-col">
      <PostItemHeader />
      <PostItemContainer />
      <PostItemInteractions />
      <PostItemComment />
    </div>
  );
}
