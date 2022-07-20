import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'

const Faq = () => {
    return (
        <>
            <div className="appointment-accordion">
                <Accordion allowZeroExpanded preExpanded={['a']}>
                    <AccordionItem uuid="a">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    01. Why choose Biza IT services?
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    02. What services does Biza IT provide?
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    03. Why is technology & IT services important?
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    04. Is your business bringing good results from technology?	
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    
                    <AccordionItem uuid="e">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    05. What our IT consultants suggest on new topics?
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default Faq;