import React from "react";
import { Rating } from "@material-ui/lab";
import style from "./ReviewCard.module.scss";

const ShowReviews = ({ record = {} }) => {
  const [reviews, setReviews] = React.useState([]);

  const deleteReview = id => {
    fetch(`http://localhost:8000/admin/deletereviewbyid/${id}`, {
      method: "GET",
      headers: {
        Accept: "applecation/json",
        "Content-Type": "applecation/json"
      }
    }).then(window.location.reload());
  };

  React.useEffect(() => {
    fetch(`http://localhost:8000/admin/reviewsbyuserid/${record.id}`, {
      method: "GET",
      headers: {
        Accept: "applecation/json",
        "Content-Type": "applecation/json"
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <h1>List of reviews here :</h1>
      {reviews.length ? (
        reviews.map((currentReview, index) => {
          return (
            <div>
              <div className={style["review-card"]}>
                <div className={style["upper-review-card"]}>
                  <div className={style["profile-details"]}>
                    <img
                      className={style["profile-image"]}
                      src={currentReview.primaryimage}
                      alt=""
                    />

                    <div className={style["profile-details"]}>
                      <span className={style["profile-fullname"]}>
                        {currentReview.userfirstname}
                      </span>
                    </div>
                    <div className={style["profile-details"]}>
                      <span className={style["profile-fullname"]}>
                        {currentReview.userlasttname}
                      </span>
                    </div>
                  </div>

                  <span>{currentReview.reviewdate}</span>
                </div>
                <div className={style["middle-review-card"]}>
                  {currentReview.reviewbody}
                </div>
                <div className={style["lower-review-card"]}>
                  <Rating
                    name="half-rating"
                    value={currentReview.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />

                  <button onClick={() => deleteReview(currentReview.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>no reviews there</p>
      )}
    </div>
  );
};
export default ShowReviews;
