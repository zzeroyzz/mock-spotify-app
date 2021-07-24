import React from 'react';
import Playlist from './Playlist'

const Categories = () =>{
    const dataCategories = [
       { id:1,
        name:'Focus',
        tagline:"Music to help you concentrate",
         },
        {id:2,
        name:'Mood',
        tagline:"Playlists to math your mood"

        },
        { id:3,
        name:'Soundtrack to your home',
        tagline:""

        },
        {id:4,
        name:'Kickback you sunday',
        tagline:""

        }
    ]

    return(
        <div>
            {dataCategories.map((category,id)=>(
                <div className="cardsWrap" key={id}> 
        <h1>{category.name}</h1>
        <span className="seeAll">SEE ALL</span>
        <p className="subtext"> Music to help you concentrate.    </p>
        <Playlist category_id={category.id}/>
        
       </div>
            ))}

        </div>
        
    )
}
export default Categories;