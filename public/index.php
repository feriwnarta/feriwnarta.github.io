<?php

require  __DIR__ . '/../vendor/autoload.php';


use Ferdev\FeriPortofolio\App\Router;
use Ferdev\FeriPortofolio\Controller\HomeController;

Router::add('GET', '/', HomeController::class, 'index');
Router::add('GET', '/tentang', HomeController::class, 'tentang');
Router::add('GET', '/proyek', HomeController::class, 'proyek');
Router::add('GET', '/kontak', HomeController::class, 'kontak');
Router::add('GET', '/feed-bgm', HomeController::class, 'feedBgm');
Router::add('GET', '/feed-nextg', HomeController::class, 'feedNextg');
Router::add('GET', '/feed-microconn', HomeController::class, 'feedMicroconn');
Router::add('GET', '/feed-microkit', HomeController::class, 'feedMicrokit');
Router::add('GET', '/feed-microkit-builder', HomeController::class, 'feedMicrokitBuilder');


Router::run();
