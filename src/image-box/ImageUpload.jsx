import { useEffect, useState } from 'react';
import "./image-box.scss";
import "./styles.css";
import { saveAs } from "file-saver";

export const ImageUpload = () => {
 
    const [file, setFile] = useState(null);
    const [hideFileSelect, setHideFileSelect] = useState(false)
    const [imgPreview, setImgPreview] = useState(null)
    const [imageName, setImageName] = useState(null);

    const uploadSingleFile = (e) => {
        if(e.target.files.length >= 0) {
            setHideFileSelect(true)
        }
        setFile(URL.createObjectURL(e.target.files[0]));
        setImageName(e.target.files[0].name);
    }

    useEffect(() => {
        setImgPreview(<img src={file} alt='' />);
    }, [file])

    const upload = (e) => {
        e.preventDefault()
        console.log(file)
    }

    const retake = (e) => {
        setHideFileSelect(false);
        setFile(null)
    }

    const saveFile = () => {
        saveAs(
          file,
          imageName
        );
      };

     const afterSelect = () => {
        return(
            <div style={{textAlign: "center", padding: "10px"}}>
            {/* <button type="button" className="btn btn-light" style={{marginRight: "5px"}} onClick={upload}>Upload</button> */}
            <button type="button" style={{marginRight: "5px"}}  className="btn btn-light" onClick={retake}>Retake</button>
            <button onClick={saveFile}>download</button>
            </div>
        )
    }

        return (
            <>
            
            <div className='collection-item'> 
                <div className='image'>
                    {imgPreview}
                </div>
            </div >
            <div style={{textAlign: "center", padding: "10px"}}>
                {
                    !hideFileSelect && (
                        <input type="file" className="btn btn-light" onChange={uploadSingleFile} />
                    )
                }
                {
                   hideFileSelect && (
                    afterSelect()
                    )
                }
                
                </div>
            </>
        )
}