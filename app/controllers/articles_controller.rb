class ArticlesController < ApplicationController

  def index
    @articles = Article.all
    render json: @articles.to_json
  end

  def show
    @article = Article.find(params[:id])
    render json: @article.to_json
  end

  def create
    @article = Article.create(article_params)
    render json: @article.to_json
  end

  private

  def article_params
    params.require(:article).permit(
      :color,
      :description,
      :material,
      :category,
      :brand,
      :subcategory,
      :image
    )
  end
end
