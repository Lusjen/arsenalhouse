<?php
/*
Template Name: Інфраструктура
*/
?>
<?
$args = array('post_type' =>'page', 'include' => array(34));
$wp_posts= get_posts($args);

$links = explode ("\n",$wp_posts[0]->post_content);
$links = str_replace('<pre>','', $links);
//    print_r($links);
?>
<?php get_header(); ?>
<div class="page">
        <div class="infrastructure-page__heading-wrapper">
            <div class="page-heading infrastructure-page__heading animate-me">
                <h1><?=$links[0];?></h1>
            </div>
        </div>
        <div class="infrastructure__filter">
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="gift_shop" id="gift_shop" checked>
                <label class="infrastructure__filter_item-icon" for="gift_shop"><span class="infrastructure__filter_icon infrastructure__filter_icon-gift-shop"></span></label>
                <label class="infrastructure__filter_item-text" for="gift_shop"><?=$links[1];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="sport_complex" id="sport_complex" checked>
                <label class="infrastructure__filter_item-icon" for="sport_complex"><span class="infrastructure__filter_icon infrastructure__filter_icon-sport_complex"></span></label>
                <label class="infrastructure__filter_item-text" for="sport_complex"><?=$links[2];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="higher_education_establishment" id="higher_education_establishment" checked>
                <label class="infrastructure__filter_item-icon" for="higher_education_establishment"><span class="infrastructure__filter_icon infrastructure__filter_icon-higher_education_establishment"></span></label>
                <label class="infrastructure__filter_item-text" for="higher_education_establishment"><?=$links[3];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="toy_store" id="toy_store" checked>
                <label class="infrastructure__filter_item-icon" for="toy_store"><span class="infrastructure__filter_icon infrastructure__filter_icon-toy_store"></span></label>
                <label class="infrastructure__filter_item-text" for="toy_store"><?=$links[4];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="cafe_restaraunts" id="cafe_restaraunts" checked>
                <label class="infrastructure__filter_item-icon" for="cafe_restaraunts"><span class="infrastructure__filter_icon infrastructure__filter_icon-cafe_restaraunts"></span></label>
                <label class="infrastructure__filter_item-text" for="cafe_restaraunts"><?=$links[5];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="school" id="school" checked>
                <label class="infrastructure__filter_item-icon" for="school"><span class="infrastructure__filter_icon infrastructure__filter_icon-school"></span></label>
                <label class="infrastructure__filter_item-text" for="school"><?=$links[6];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="dentist" id="dentist" checked>
                <label class="infrastructure__filter_item-icon" for="dentist"><span class="infrastructure__filter_icon infrastructure__filter_icon-dentist"></span></label>
                <label class="infrastructure__filter_item-text" for="dentist"><?=$links[7];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="pharmacy" id="pharmacy" checked>
                <label class="infrastructure__filter_item-icon" for="pharmacy"><span class="infrastructure__filter_icon infrastructure__filter_icon-pharmacy"></span></label>
                <label class="infrastructure__filter_item-text" for="pharmacy"><?=$links[8];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="supermarket" id="supermarket" checked>
                <label class="infrastructure__filter_item-icon" for="supermarket"><span class="infrastructure__filter_icon infrastructure__filter_icon-supermarket"></span></label>
                <label class="infrastructure__filter_item-text" for="supermarket"><?=$links[9];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="shopping_mall" id="shopping_mall" checked>
                <label class="infrastructure__filter_item-icon" for="shopping_mall"><span class="infrastructure__filter_icon infrastructure__filter_icon-shopping_mall"></span></label>
                <label class="infrastructure__filter_item-text" for="shopping_mall"><?=$links[10];?></label>
            </div>
            <div class="infrastructure__filter_item">
                <input type="checkbox" name="bank" id="bank" checked>
                <label class="infrastructure__filter_item-icon" for="bank"><span class="infrastructure__filter_icon infrastructure__filter_icon-bank"></span></label>
                <label class="infrastructure__filter_item-text" for="bank"><?=$links[11];?></label>
            </div>
        </div>
        <div class="infrastructure-page__wrapper js-infrastructure-page__map">
        </div>
    </div>
<?php get_footer();?>
<!--    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMNKSlK2f4GzCKxngMafg2SkcA5QeWsgI"></script>-->
<!--    <script src="js/common.min.js"></script>-->
<!--    <script src="js/infrastructure.min.js"></script>-->
