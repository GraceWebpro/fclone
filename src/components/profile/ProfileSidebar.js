import React, { useState, useEffect } from 'react'
import './ProfileSidebar.css';
import { db } from '../config/firebase';
import { collection, onSnapshot } from '@firebase/firestore';

function ProfileSidebar({ username }) {
    var [nposts, setNPosts] = useState([])
    const [cuserdata, setCUserdata] = useState()

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (doc.data().username === username) {
                    if (nposts.length !== 9) {
                        if (!nposts.includes(doc.data().imageUrl)) {
                            nposts.push(doc.data().imageUrl)
                        }
                    }
                }
            })
        })
    }, [])

    useEffect(() => {
        const userRef = collection(db, 'users')
        onSnapshot(userRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (doc.data().displayName === username) {
                    setCUserdata(doc.data())
                }
            })
        })
    }, [])

    return (
        <div className="profileSidebar" >
            <div className="posts2">
                <h1>Intro</h1>
                <div className="intro">
                    {
                        cuserdata?.birthday ? (
                            <div className="introblock">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/IqqJ0EjDF9B.png" className="birthday" alt='' />
                                <h1>{`${cuserdata?.birthday[0]} - ${cuserdata?.birthday[1]} - ${cuserdata?.birthday[2]}`}</h1>
                            </div>
                        ) : (
                                console.log()
                            )

                    }
                </div>
            </div>
            <div className="posts2">
                <h1>Photos</h1>
                <div className="photos">
                    {
                        nposts.length === 0 ? (
                            <h1 className="NoNotif">It seems that there are no image posted by this user</h1>
                        ) : (
                                nposts.map((post) => (
                                    <img src={post} alt='' />
                                ))
                            )

                    }
                </div>
            </div>
            <div className="hr profile" />
            <div className="policies profile">
                <p>Privacy</p>
                <p className="dot">·</p>
                <p>Terms</p>
                <p className="dot">·</p>
                <p>Advertising</p>
                <p className="dot">·</p>
                <p>Ad choices</p>
                <i className="ads" />
                <p className="dot">·</p>
                <p>Cookies</p>
                <p className="dot">·</p>
                <p>More</p>
                <p className="dot">·</p>
                <p>Facebook © 2020</p>
            </div>
        </div >
    )
}


export default ProfileSidebar