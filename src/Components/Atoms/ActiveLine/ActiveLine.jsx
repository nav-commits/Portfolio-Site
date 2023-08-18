import React from 'react';
import '../ActiveLine/ActiveLine.css';

export default function ActiveLine({ width, marginTop, height }) {
    return <div className='active' style={{ width: width, marginTop: marginTop, height: height }} />;
}
