require 'rest_client'

class MovieService
  class << self
    def fetch_movies(params = {})
      uri = "#{ENV.fetch('API_URL')}/search/movie"
      res = RestClient.get(uri, params: payload(params))
      JSON.parse(res)
    end

    protected

    def payload(params)
      {
        api_key: ENV.fetch('API_KEY'),
        query: params[:q] || 'superman',
        include_adult: params[:adult] || false,
        region: params[:region] || '',
        year: params[:year] || '2016'
      }.freeze
    end
  end
end
