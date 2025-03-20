<?php

namespace App\Http\Integrations\SanMar\Xml;

use Saloon\XmlWrangler\XmlWriter;

class RequestXml
{
    public function WriteXml($title, $SanMarUsername, $SanMarPassword, $bodyData): string
    {
        $body = [];

        $body = $bodyData;

        return XmlWriter::make()->write('root', [
            "soapenv:Envelope" => [
                "soapenv:Header" => "",
                "soapenv:Body" => [
                    "ns:[$title]" => [
                        "shar:wsVersion" => "1.0.0",
                        "shar:id" => $SanMarUsername,
                        "shar:password" => $SanMarPassword,

                        ...$body,

                        "shar:localizationCountry" => "US",
                        "shar:localizationLanguage" => "EN",
                        "shar:configurationType" => "Blank",
                    ],
                ],
            ],
        ]);

    }


    public function getProductInfoByBrand($brand, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "impl:getProductInfoByBrand" => [
                            "arg0" => [
                                "brandName" => $brand,
                            ],
                            "arg1" => [
                                "sanMarCustomerNumber" => "5",
                                "sanMarUserName" => $SanMarUsername,
                                "sanMarUserPassword" => $SanMarPassword,
                            ],
                        ],
                    ],
                ],
        ]);
    }

    public function GetFobPoints($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetFobPoints" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]
        );
    }

    public function GetInventoryLevels($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInventoryLevels" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInventoryQtyForStyleColorSize($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInventoryQtyForStyleColorSize" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInventoryQtyForStyleColorSizeByWhse($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInventoryQtyForStyleColorSizeByWhse" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoiceByInvoiceNo($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoiceByInvoiceNo" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoices($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoices" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesByInvoiceDateRange($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesByInvoiceDateRange" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesByOrderDate($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesByOrderDate" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesByPurchaseOrderNo($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesByPurchaseOrderNo" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesHeaderByInvoiceDateRange($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesHeaderByInvoiceDateRange" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesHeaderByOrderDate($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesHeaderByOrderDate" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetInvoicesHeaderByPurchaseOrderNo($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetInvoicesHeaderByPurchaseOrderNo" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetMediaContent($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetMediaContent" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetMediaDateModified($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetMediaDateModified" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetOrderShipmentNotification($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetOrderShipmentNotification" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetOrderStatus($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetOrderStatus" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetPackingSlip($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetPackingSlip" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetPricing($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetPricing" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetProduct($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
            "soapenv:Header" => "",
            "soapenv:Body" => [
                "ns:GetProductRequest" => [
                    "shar:wsVersion" => "2.0.0",
                    "shar:id" => "SanMarUsername",
                    "shar:password" => "SanMarPassword",
                    "shar:localizationCountry" => "us",
                    "shar:localizationLanguage" => "en",
                    "shar:productId" => "MM1000",
                    "shar:partId" => "1878771",
                    "shar:colorName" => "DeepBlack",
                    "shar:ApparelSizeArray" => [
                        "shar:ApparelSize" => [
                            "shar:apparelStyle" => "Mens",
                            "shar:labelSize" => [
                                "S",
                                "S",
                            ],
                            "shar:customSize" => "S",
                        ],
                    ],
                ],
            ],
        ]);
    }

    public function GetProductCloseOut($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetProductCloseOut" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetProductDateModified($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetProductDateModified" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetProductSellable($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetProductSellable" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetServiceMethods($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetServiceMethods" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetUnpaidInvoices($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetUnpaidInvoices" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }

    public function GetUnpaidInvoicesHeader($title, $SanMarUsername, $SanMarPassword): string
    {
        return XmlWriter::make()->write('root', [
                "soapenv:Envelope" => [
                    "soapenv:Header" => "",
                    "soapenv:Body" => [
                        "ns:GetUnpaidInvoicesHeader" => [
                            "shar:wsVersion" => "2.0.0",
                            "shar:id" => $SanMarUsername,
                            "shar:password" => $SanMarPassword,
                            "shar:localizationCountry" => "us",
                            "shar:localizationLanguage" => "en",
                            "shar:productId" => "MM1000",
                            "shar:partId" => "1878771",
                            "shar:colorName" => "DeepBlack",
                            "shar:ApparelSizeArray" => [
                                "shar:ApparelSize" => [
                                    "shar:apparelStyle" => "Mens",
                                    "shar:labelSize" => [
                                        "S",
                                        "S",
                                    ],
                                    "shar:customSize" => "S",
                                ],
                            ],
                        ],
                    ],
                ],
            ]

        );
    }
}
