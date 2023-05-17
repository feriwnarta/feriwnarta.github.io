<?php

namespace Ferdev\FeriPortofolio\Controller;

use Ferdev\FeriPortofolio\App\View;


class HomeController
{
    public function index(): void
    {
        View::render('home');
    }
}
