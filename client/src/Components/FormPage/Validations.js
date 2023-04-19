
const validation = (form) => {
        const errors = {};
        const regexName =  RegExp(/^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/);
        const regexRating = RegExp(/[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/);
        const regexImageUrl = RegExp(/^(https?:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?(png|jpg|jpeg)$/);

        
        if(!regexName.test(form.name)) errors.name = 'Only letters and numbers are allowed';
        if(!form.name) errors.name = 'You must type a name';
        
        if(Date.parse(form.released) > Date.now()) errors.released = 'The selected date is greater than the current date';
        if(!form.released) errors.released = 'Choose a released date'
    
        if(!regexRating.test(form.rating)) errors.rating = 'Rating the game (Integer or decimal)'
        if(form.rating > 5) errors.rating = 'Must be less or equal than five'
        if(form.rating < 1) errors.rating = 'must be greater than or equal to one'
    
        if(!form.description) errors.description = 'You must type a description' 
    
        if(!regexImageUrl.test(form.background_image)) errors.background_image = 'Must be a valid url image'
        if(!form.background_image) errors.background_image = 'Enter a URL image'
     
        if(!form.genres[0]) errors.genres = 'You must choose at least one gender'
        if(!form.platforms[0]) errors.platforms = 'You must choose at least one platform'
    
        return errors
    }

export default validation;




    // if(!form.name) setErrors({ ...errors, name: 'You must type a name.'})
    // if (!regexName.test(form.name)) setErrors({ ...errors, name: 'The name must be between 1 and 50 characters.'});
    // else return setErrors({ ...errors, name: '' });


    // if(!form.description) setErrors({...errors, description: 'You must provide a description.'});
    // if(form.description.length < 10) setErrors({ ...errors, description: 'The description must have at least 10 characters.'});
    // if(form.description.length > 500) setErrors({ ...errors, description: 'The description must have less than 500 characters.'});
    // else return setErrors({ ...errors, description: ''});


    // if(!form.background_image) setErrors({ ...errors, background_image: 'You must provide a image.'})
    // if(!regexImage.test(form.background_image)) setErrors({ ...errors, background_image: 'The image must be a valid url.'});
    // else return setErrors({...errors, background_image: ''});


    // if(!regexRating.test(form.rating)) setErrors({ ...errors, rating: 'Game score (whole number or decimal number).'});
    // if(form.rating.length > 5) setErrors({ ...errors, rating: 'The rating must be less than or equal to 5.'});
    // if(form.rating.length < 1) setErrors({ ...errors, rating: 'The rating must be greater than or equal to 1.'});
    // else return setErrors({...errors, rating: ''});


    // if(!form.released) setErrors({ ...errors, released: 'Enter the release date.' })
    // if(isNaN(Date.parse(form.released))) setErrors({ ...errors, released: 'Enter a valid date.'});
    // if(Date.parse(form.released) > Date.now()) setErrors({ ...errors, released: 'The launch date cannot be later than the current date.' });
    // else return setErrors({...errors, released: ''});


    // if(!form.genres[0] ) setErrors({ ...errors, genres: 'Please select at least one genre.' });
    // else return setErrors({ ...errors, genres: '' });


    // if(!form.platforms[0] ) setErrors({ ...errors, platform: 'Please select at least one platform.'});
    // else return setErrors({ ...errors, platform: '' });
