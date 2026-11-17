import { useState } from "react"
import './Bookshelf.css'


function create() {
    const [formData, setFormData] = useState({
        title: '',
        author: ''
    })

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault() 
        setBooks([...books, formData])

        setFormData({
            title: '',
            author: ''
        }) 
    }

    return (
        <div>

            <h2>Add a Book</h2>

            <form className="formDiv" onSubmit={handleSubmit}>
                <label htmlFor="title"> title:</label>
                <input
                    type="text"
                    value={formData.title}
                    id="title"
                    name="title"
                    onChange={handleChange}
                    required
                />

                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    value={formData.author}
                    id="author"
                    name="author"
                    onChange={handleChange}
                />

                <button>Add</button>
            </form>


            <h2>All Books</h2>
            {books.map((oneBook) =>
           
                <div  className = 'bookCard' key={`${oneBook._id}`}>
                    <p>{oneBook.title}</p>
                    <p>{oneBook.author}</p>
                </div>
               
            )}
        </div>
    )
}

export default create

