import "./featured.css";


export default function Featured (){
  return (
    <div className="featured"  >
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Young</h1>
          <h2>Shannon</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Young</h1>
          <h2>Jonah</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Young</h1>
          <h2>Vale</h2>
        </div>
      </div>
    </div>
  );
};
