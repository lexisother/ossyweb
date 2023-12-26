<?php

if (!function_exists('getImagePosition')) {
    function getImagePosition($image)
    {
        if ($image instanceof \craft\elements\Asset) {
            return $image->getFocalPoint();
        }
        return '50% 50%';
    }
}

return [
    'default' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'hero' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'ratio' => 9 / 4,
            'jpegQuality' => 50,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'heroMobile' => [
        'transforms' => [
            ['width' => 1400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 78 / 115,
            'jpegQuality' => 50,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'textImage' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'ratio' => 29 / 31,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-1/1' => [
        'transforms' => [
            ['ratio' => 1 / 1, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-4/3' => [
        'transforms' => [
            ['ratio' => 4 / 3, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-16/9' => [
        'transforms' => [
            ['ratio' => 16 / 9, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-5/2' => [
        'transforms' => [
            ['ratio' => 5 / 2, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],

    'referencImg-1/2' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 37 / 25,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/2-1' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 2 / 1,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/3' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 39 / 46,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/9' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 36 / 29,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/4' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 7 / 10,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/4-2' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 1 / 2,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-1/4-9' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 4 / 5,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-alt' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 46 / 29,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'referencImg-compact' => [
        'transforms' => [
            ['width' => 560],
            ['width' => 280],
        ],
        'defaults' => [
            'ratio' => 7 / 6,
            'jpegQuality' => 60,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
];
