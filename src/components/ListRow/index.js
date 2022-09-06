import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Container } from "./style";

import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';

export default function ListRow({type, title, list}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = list.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 40;  // 40(20+20) - padding lateral
        }

        setScrollX(x);
    }

    return(
        <Container>
            <h3>{title}</h3>

            <div className="listRow--left" onClick={handleLeftArrow}>
                <MdNavigateBefore color="#fff" size={50}/>
            </div>
            <div className="listRow--right" onClick={handleRightArrow}>
                <MdNavigateNext color="#fff" size={50}/>
            </div>

            <div className="list" style={{
                marginLeft: scrollX
            }}>
                {list.map((item) => (
                    <Link to={`/details/${type}/${item.id}`} key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title}/>
                        <h5>{type === 'movie' ? item.title : item.name}</h5>
                    </Link>   
                ))}
            </div>
            
        </Container>
    )
}