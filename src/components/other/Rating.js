
export const Rating = ({ratings}) => {

    // array of 5 false
    let stars = Array(5).fill(false);
    for (let i = 0; i < ratings; i++){
        stars[i] = true;
    }
    // console.log(ratings)

  return (
    <>
    { stars.map((star, index)=>(
        star ? (
            <i key={index} className="mr-1 text-lg bi bi-star-fill text-yellow-400"></i>
        ) : (
            <i key={index} className="mr-1 text-lg bi bi-star text-yellow-400"></i>
        )
    ))}
    </>
  )
}
