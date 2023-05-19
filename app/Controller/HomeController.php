<?php

namespace Ferdev\FeriPortofolio\Controller;

use Ferdev\FeriPortofolio\App\View;


class HomeController
{
    public function index(): void
    {
        View::render('home');
    }

    public function tentang(): void
    {
        echo 'tentang';
    }

    public function kontak(): void
    {
        echo 'kontak';
    }

    public function feed(): void
    {
        View::render('feed');
    }
}
