import React, { useEffect, useState } from 'react';
import Button from './Button';

export default function Random(props){

    const [color, setColor] = useState([234, 200, 123])

    //useEffect(()=>applyColor(),[])

    useEffect(()=> applyColor(),[color])

    function applyColor() {
        const formattedColor = formatColor(color);
        document.body.style.background = formattedColor;
    }
    function formatColor(ary) {
        return `rgb(${ary.join(', ')})`;
    }
    function isLight() {
        const rgb = color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
    function chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
          random.push(Math.floor(Math.random()*256)); //.floor(no decimals)
        }
        return random;
      }

      function handleClick(){
        setColor(chooseColor());
      }

    return  (
        <div>
          <h1 className={isLight() ? 'white' : 'black'}>
            Your color is {formatColor(color) }
          </h1>
          <Button light={isLight()} handleMouseClick={handleClick}/>
        </div>
      );
}