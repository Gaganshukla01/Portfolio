import React from "react";
import './services.styles.css';
import { SiLeetcode } from 'react-icons/si'
import { SiCodechef } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
const Service = () => {
    return (
        <section id="Services">
            <h2>
                Coding Profile:
            </h2>
            <div className="container code">
                <div className="coding-head">
                    <SiLeetcode className='icon-c' />
                    <a href="https://leetcode.com/gaganshuk/" rel="noreferrer" target="_blank" className="l-edit">Leetcode</a>
                    <small className="up-dist">
                        <p>
                            1. Solved 100+ Problems.
                            <br/>
                            2. Max. Rating is 1723.
                        </p>
                    </small>
                </div>

                {/* <div className="coding-head">
                    <SiCodechef className='icon-c' />
                    <a href="https://www.codechef.com/users/kartikay_12345" target="_blank" className="l-edit">Codechef</a>
                    <small className="up-dist">
                        <p>
                            1. 4⭐at Codechef.
                            <br/>  
                            2. Max. Rating is 1818.
                        </p>
                    </small>
                </div> */}

                <div className="coding-head">
                    <SiCodeforces className='icon-c' />
                    <a href="" target="_blank" className="lcf-edit">Codeforces</a>
                    <small className="up-dist">
                        <p>
                            1. Max. Rating is 1166.
                        </p>
                    </small>
                </div>

                <div className="coding-head">
                    <SiGeeksforgeeks className='icon-c' />
                    <a href="https://auth.geeksforgeeks.org/user/gagan9039118901" target="_blank" className="lgfg-edit">Geeks</a>
                    <small className="up-dist">
                        <p>
                        1. Solved 50+ Problems.
                            <br/>
                        2. Max. Score is 112.
                        </p>
                    </small>
                </div>
            </div>


        

        </section>
    );
}
export default Service;
