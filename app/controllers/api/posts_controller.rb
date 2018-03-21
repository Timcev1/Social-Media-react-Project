class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :post_finder, only: [:show, :edit, :destroy]

  def index
    @posts = Post.paginate(:page => page, :per_page => per_page)
    @pages = totalPages
    return render json: @posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { message: post.errors}, status: 400
    end
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: {message: @post.errors}, status: 400
    end
  end

  def destroy
    if @post.destroy
      render status: 204
    else
      render json: { message: "unable to remove this post"}, status: 400
    end
  end

  private
    def totalPages
      totalPosts = Post.all.length
      dividedPosts = totalPosts.to_i / 3
      return (dividedPosts.to_f).ceil
    end

    def per_page
      per_page = 3
    end

    def page
      params[:page] || 1
    end

    def post_params
      params.require(:post).permit(:title, :content, :page, :per_page)
    end
    def post_finder
      @post = Post.find(params[:id])
    end
end
