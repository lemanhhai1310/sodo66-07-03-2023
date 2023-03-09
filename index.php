<?php $data["title"] = "Home"; ?>
<?php $bodyClass = '' ?>
<?php require "template-parts/layouts/header.php"; ?>
<div class="uk-container uk-container-expand home__container uk-width">
    <div class="uk-text-center"><img class="home__logo" src="images/sodo_logo.png" alt=""></div>
    <div class="uk-text-center home__nhacai"><img src="images/nha_cai_so1.png" alt=""></div>
    <div class="home__grid uk-flex-middle uk-flex-center uk-grid-collapse" uk-grid>
        <div class="uk-width-expand">
            <div class="uk-text-center"><img src="images/art.png" alt=""></div>
            <div class="home__grid1 uk-child-width-auto uk-flex-center uk-grid uk-grid-collapse" uk-grid>
                <div><img src="images/games/games.png" alt=""></div>
            </div>
        </div>
        <div class="uk-width-auto home__width">
            <form id="submitForm" name="submit-to-google-sheet" class="home__card uk-card uk-card-body uk-background-norepeat uk-background-center-center uk-background-cover" data-src="images/frame.png" uk-img>
                <img class="home__card__title uk-position-top-center" src="images/title.png" alt="">
                <div class="">
                    <input id="username" name="name" class="home__card__input uk-background-norepeat uk-background-contain uk-background-center-center uk-input uk-form-large" type="text" placeholder="Tên đăng nhập:" aria-label="Input" data-src="images/Group7.png" uk-img>
                </div>
                <div class="uk-margin" uk-toggle="cls: uk-margin; mode: media; media: @m">
                    <div class="uk-inline uk-width">
                        <a class="uk-form-icon home__card__icon uk-form-icon-flip" id="togglePassword" href="javascript:void(0)" uk-icon="icon: eye-slash; ratio: 2"></a>
                        <input id="password" name="pass" class="home__card__input uk-background-norepeat uk-background-contain uk-background-center-center uk-input uk-form-large" type="password" placeholder="Mật khẩu:" aria-label="Input" data-src="images/Group7.png" uk-img>
                    </div>
                </div>
                <div class="uk-margin" uk-toggle="cls: uk-margin; mode: media; media: @m">
                    <div class="uk-inline uk-width">
                        <a class="uk-form-icon home__card__icon uk-form-icon-flip" id="togglePasswordConfirm" href="javascript:void(0)" uk-icon="icon: eye-slash; ratio: 2"></a>
                        <input id="confirm-password" name="pass_confirm" class="home__card__input uk-background-norepeat uk-background-contain uk-background-center-center uk-input uk-form-large" type="password" placeholder="Nhập lại mật khẩu:" aria-label="Input" data-src="images/Group7.png" uk-img>
                    </div>
                </div>
                <div class="uk-margin-top" uk-toggle="cls: uk-margin-top; mode: media; media: @m">
                    <input id="email" name="email" class="home__card__input uk-background-norepeat uk-background-contain uk-background-center-center uk-input uk-form-large" type="email" placeholder="E-mail:" aria-label="Input" data-src="images/Group7.png" uk-img>
                </div>
                <button type="submit" class="uk-button uk-position-bottom-center home__card__btn"><img src="images/button+30K.png" alt=""></button>
                <div id="loader"></div>
            </form>
        </div>
    </div>
</div>
<?php require "template-parts/layouts/footer.php"; ?>