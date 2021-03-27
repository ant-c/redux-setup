import React from 'react';
import { connect } from 'react-redux';
import { setImageURL } from '../../redux/image/image.actions'; 

const Card = ({ image, setImageURL }) => {
    console.log(image)
    return (
        <div className='card'>
            <button onClick={() => setImageURL({ imageURL: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300` })}>Update Photo</button>
            <div className='item'>
                <img
                    alt='monster'
                    src={`${image.imageURL}`}
                />
                <p>{image ? image.imageURL : 'No Image'}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    image: state.image.imageURL
});

const mapDispatchToProps = dispatch => ({
    setImageURL: imageURL => dispatch(setImageURL(imageURL))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);