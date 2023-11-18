import React from "react";
import styles from "./style.module.css";
export default function page() {
  return (
    <div className={styles.screen}>
      <div className={styles.feedbackform}>
        <h2 className={styles.header}>Register Today</h2>
        <div>
          <form className={styles.form}>
            <input type="text" name="email" placeholder="Email"></input>
            <input type="text" name="name" placeholder="Name"></input>
            <label>Reminder will be sent via email</label>

            <input
              type="text"
              id="feedbackphone"
              name="phone"
              placeholder="Phone number"
            ></input>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
