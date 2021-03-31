class PostsController < ApplicationController
  def index #indexアクションを定義した
    # メモを降順で表示できるようになりました。
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end
  
  def create
    # 新たに投稿されたメモの内容をpostに格納しています。
    post = Post.create(content: params[ :content])
    # renderはレスポンスを出力してくれてjsonのポストの中身を渡す
    render json:{ post: post }
  end
  
end
