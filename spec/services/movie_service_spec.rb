
describe MovieService do
  context '#fetch_movies' do
    describe 'call with default params' do
      subject(:response) { described_class.fetch_movies }

      it 'return an array' do
        expect(response).to be_an_instance_of(Array)
      end

      it 'return more then one results' do
        expect(response.size).to be > 0
      end

      it 'has basic info about the movie' do
        expect(response[0]).to include_json(
          id: 209_112,
          title: 'Batman v Superman: Dawn of Justice'
        )
      end
    end

    describe 'call with params' do
      subject(:response) { described_class.fetch_movies(params) }
      let(:params) { { lang: 'de-DE', q: 'batman', year: 2011 } }

      it 'returns an array of 2 results ' do
        expect(response.count).to eq 2
      end

      it 'return the title' do
        expect(response[0]['title']).to eq 'Batman: Year One'
      end
    end
  end
end
