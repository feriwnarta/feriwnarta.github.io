<?php

namespace Ferdev\FeriPortofolio\App;

class View
{

    public static function render(string $view, $model = array()): void
    {
        require __DIR__ . '/../View/' . $view . '.php';
    }
}
