import RecipeContainer from "@/Containers/RecipeContainer"

const page = async ({params}) => {
  const {id} = await params;
  return (
    <RecipeContainer id={id}/>
  )
}

export default page