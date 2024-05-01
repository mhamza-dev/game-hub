import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { genres, error, isLoading} = useGenres()
  return (
    <>
        <ul>
            {genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
        </ul>
    </>
  )
}

export default GenreList