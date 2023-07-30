const sinon = require('sinon');

const PokemonRepository = require('../repository/pokemonRepository');
const PokemonUseCases = require('./PokemonUseCases');
const pokemonMockPayload = require('../../utils/pokemonMockPayload.json');

describe('ListPokemon use case test suite', () => {
  it('should retrieve pokemons from database', async () => {
    const pokemonRepository = new PokemonRepository();
    const stub = sinon.stub(pokemonRepository, 'findAll').returns(pokemonMockPayload);
    const pokemonListUseCase = new PokemonUseCases(pokemonRepository);
    const pokemons = await pokemonListUseCase.findAll(1, 5);

    expect(stub.calledOnce).toBe(true);
    expect(pokemons.length).toBe(2);
    expect(pokemons[0]).toEqual(pokemonMockPayload[0]);
    expect(pokemons[1]).toEqual(pokemonMockPayload[1]);
  });
});
