import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div id="pagination">
            <div class="container">
                <div class="numbers">
                    <div class="number-wrapper">
                        <div class="number active">
                            <p>1</p>
                        </div>

                        <div class="number">
                            <p>2</p>
                        </div>

                        <div class="number">
                            <p>3</p>
                        </div>

                        <div class="elipse">
                            <p>...</p>
                        </div>

                        <div class="number">
                            <p>7</p>
                        </div>
                    </div>

                    <div class="next-button">
                        <button><Link>Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;