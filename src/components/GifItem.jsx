

export const GifItem = ({title, url, id}) => {

//console.log({title,url, id})

  return (
    <div className="card">
        <img src={url} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default GifItem
