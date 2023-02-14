import React from 'react';

function Login() {
    return (
        <div className="App">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle">
                            <div class="text-center mt-4">
                                <h1 class="h2">Welcome back, Dey</h1>
                                <p class="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="m-sm-4">
                                        <div class="text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Andrew Jones"
                                                class="img-fluid rounded-circle" width="132" height="132" />
                                        </div>
                                        <form>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control form-control-lg" type="email" name="email"
                                                    placeholder="Enter your email" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input class="form-control form-control-lg" type="password" name="password"
                                                    placeholder="Enter your password" />
                                                <small>
                                                    <a href="pages-reset-password.html">Forgot password?</a>
                                                </small>
                                            </div>
                                            <div>
                                                <div class="custom-control custom-checkbox align-items-center">
                                                    <input type="checkbox" class="custom-control-input" value="remember-me"
                                                        name="remember-me" checked="" />
                                                    <label class="custom-control-label text-small">Remember me next time</label>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <a href="index.html" class="btn btn-lg btn-primary">Sign in</a>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
