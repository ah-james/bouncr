import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'


import styles from './NewReview.module.css'
import ReviewForm from "./ReviewForm"
import Button from "../UI/Button"
import { addReview } from '../../store/actions/reviews-actions';

const NewReview = (props) => {

    const [mountForm, setMountForm] = useState(false)

    const dispatch = useDispatch()

    const accessToken = useSelector(state => {
        return state.spotify.accessToken
    })

    const handleSaveReview = async (review) => {
        // could add useNavigate hook in app and history.push() to navigate to new page when
        // form is submitted? just ideas for the future
        dispatch(addReview(review, accessToken))
    }

    const handleClick = () => {
        setMountForm(current => !current)
    }

    if (mountForm) {
        return(
            <div className={styles["new-review"]}>
                <ReviewForm handleClick={handleClick} onSaveReview={handleSaveReview} />
            </div>
        )
    }

    return (
        <div className={styles['new-review']}>
            <Button handleClick={handleClick}>Add an Album</Button>
        </div>
    )


}

export default NewReview