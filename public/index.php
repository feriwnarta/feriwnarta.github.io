<?php

require  __DIR__ . '/../vendor/autoload.php';


use Ferdev\FeriPortofolio\App\Router;
use Ferdev\FeriPortofolio\Controller\HomeController;

Router::add('GET', '/', HomeController::class, 'index');
Router::add('GET', '/tentang', HomeController::class, 'tentang');
Router::add('GET', '/proyek', HomeController::class, 'tentang');
Router::add('GET', '/kontak', HomeController::class, 'kontak');
Router::add('GET', '/feed', HomeController::class, 'feed');


Router::run();
