import React, { Component } from 'react';
import "./image-box.scss";
import "./styles.css";

class SingleImageUploadComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            hideFileSelect: false
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
        this.retake = this.retake.bind(this)
        this.afterSelect = this.afterSelect.bind(this)
    }

    uploadSingleFile(e) {
        if(e.target.files.length >= 0) {
            this.setState.hideFileSelect = true
        }
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    retake(e) {
        this.state({file: null, hideFileSelect: false});
    }

     afterSelect() {
        return(
            <>
            <button type="button" className="btn btn-light" onClick={this.upload}>Upload</button>
            <button type="button" className="btn btn-light" onClick={this.retake}>Retake</button>
            </>
        )
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }
        return (
            <>
            <div className='collection-item'> 
                <div className='image'>
                    {imgPreview}
                </div>
            </div >
            <div className="row">
                <div className="col-sm-6 text-center mr-2">
                {
                    !this.setState.hideFileSelect && (
                        <input type="file" className="btn btn-light" onChange={this.uploadSingleFile} />
                    )
                }
                {
                   this.setState.hideFileSelect && (
                    this.afterSelect()
                    )
                }
                
                </div>
                </div>
            </>
        )
    }
}
export default SingleImageUploadComponent;