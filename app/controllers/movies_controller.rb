class MoviesController < ApplicationController
  def index
    @movies = MovieService.fetch_movies
  end

  def show; end

  def search
    @movies = MovieService.fetch_movies(q: params[:q], year: params[:year])
    render :index
  end

  private

  def movie_service
    @movie_service ||= MovieService.new
  end

  def movie_params
    params.require(:search).permit(:q, :year, :us)
  end
end
