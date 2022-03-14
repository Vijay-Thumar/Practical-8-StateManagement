import React from 'react';
import styles from './css/UploadImg.module.css';

function UploadImg() {
    return (
        <div className={`${styles.upload_img}`}>
            <input type='file' id='profile_img' hidden/>
            <label htmlFor='profile_img'>photo +</label>
        </div>
    )
}

export default UploadImg;