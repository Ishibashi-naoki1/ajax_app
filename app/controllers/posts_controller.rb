class PostsController < ApplicationController
  def index #indexアクションを定義した
    # メモを降順で表示できるようになりました。
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end
  
  def create
    Post.create(content: params[ :content])
    redirect_to action: :index  # 追記する
  end
  
end
