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
        View::render('about');
    }

    public function kontak(): void
    {
        View::render('contact');
    }

    public function proyek(): void
    {
        View::render('project');
    }

    public function feedBgm(): void
    {
        View::render('feed-bgm');
    }

    public function feedNextg(): void
    {
        View::render('feed-nextg');
    }

    public function feedMicroconn(): void
    {
        View::render('feed-microconn');
    }

    public function feedMicrokit(): void
    {
        View::render('feed-microkit');
    }

    public function feedMicrokitBuilder(): void
    {
        View::render('feed-microkit-builder');
    }
}
